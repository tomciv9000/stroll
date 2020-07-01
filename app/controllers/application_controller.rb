class ApplicationController < ActionController::API
    include Knock::Authenticable

    def encode_token(payload)
        JWT.encode(payload, (process.env.JWT_SECRET_KEY))
    end

end
